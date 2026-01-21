'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11661<T> = T extends (infer U)[]
  ? DeepReadonlyArray11661<U>
  : T extends object
  ? DeepReadonlyObject11661<T>
  : T;

interface DeepReadonlyArray11661<T> extends ReadonlyArray<DeepReadonly11661<T>> {}

type DeepReadonlyObject11661<T> = {
  readonly [P in keyof T]: DeepReadonly11661<T[P]>;
};

type UnionToIntersection11661<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11661<T> = UnionToIntersection11661<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11661<T extends unknown[], V> = [...T, V];

type TuplifyUnion11661<T, L = LastOf11661<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11661<TuplifyUnion11661<Exclude<T, L>>, L>;

type DeepPartial11661<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11661<T[P]> }
  : T;

type Paths11661<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11661<K, Paths11661<T[K], Prev11661[D]>> : never }[keyof T]
  : never;

type Prev11661 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11661<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11661 {
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

type ConfigPaths11661 = Paths11661<NestedConfig11661>;

interface HeavyProps11661 {
  config: DeepPartial11661<NestedConfig11661>;
  path?: ConfigPaths11661;
}

const HeavyComponent11661 = memo(function HeavyComponent11661({ config }: HeavyProps11661) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11661) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11661 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11661: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11661.displayName = 'HeavyComponent11661';
export default HeavyComponent11661;
