'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11941<T> = T extends (infer U)[]
  ? DeepReadonlyArray11941<U>
  : T extends object
  ? DeepReadonlyObject11941<T>
  : T;

interface DeepReadonlyArray11941<T> extends ReadonlyArray<DeepReadonly11941<T>> {}

type DeepReadonlyObject11941<T> = {
  readonly [P in keyof T]: DeepReadonly11941<T[P]>;
};

type UnionToIntersection11941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11941<T> = UnionToIntersection11941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11941<T extends unknown[], V> = [...T, V];

type TuplifyUnion11941<T, L = LastOf11941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11941<TuplifyUnion11941<Exclude<T, L>>, L>;

type DeepPartial11941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11941<T[P]> }
  : T;

type Paths11941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11941<K, Paths11941<T[K], Prev11941[D]>> : never }[keyof T]
  : never;

type Prev11941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11941 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths11941 = Paths11941<NestedConfig11941>;

interface HeavyProps11941 {
  config: DeepPartial11941<NestedConfig11941>;
  path?: ConfigPaths11941;
}

const HeavyComponent11941 = memo(function HeavyComponent11941({ config }: HeavyProps11941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11941.displayName = 'HeavyComponent11941';
export default HeavyComponent11941;
