'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11998<T> = T extends (infer U)[]
  ? DeepReadonlyArray11998<U>
  : T extends object
  ? DeepReadonlyObject11998<T>
  : T;

interface DeepReadonlyArray11998<T> extends ReadonlyArray<DeepReadonly11998<T>> {}

type DeepReadonlyObject11998<T> = {
  readonly [P in keyof T]: DeepReadonly11998<T[P]>;
};

type UnionToIntersection11998<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11998<T> = UnionToIntersection11998<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11998<T extends unknown[], V> = [...T, V];

type TuplifyUnion11998<T, L = LastOf11998<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11998<TuplifyUnion11998<Exclude<T, L>>, L>;

type DeepPartial11998<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11998<T[P]> }
  : T;

type Paths11998<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11998<K, Paths11998<T[K], Prev11998[D]>> : never }[keyof T]
  : never;

type Prev11998 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11998<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11998 {
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

type ConfigPaths11998 = Paths11998<NestedConfig11998>;

interface HeavyProps11998 {
  config: DeepPartial11998<NestedConfig11998>;
  path?: ConfigPaths11998;
}

const HeavyComponent11998 = memo(function HeavyComponent11998({ config }: HeavyProps11998) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11998) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11998 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11998: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11998.displayName = 'HeavyComponent11998';
export default HeavyComponent11998;
