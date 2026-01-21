'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11392<T> = T extends (infer U)[]
  ? DeepReadonlyArray11392<U>
  : T extends object
  ? DeepReadonlyObject11392<T>
  : T;

interface DeepReadonlyArray11392<T> extends ReadonlyArray<DeepReadonly11392<T>> {}

type DeepReadonlyObject11392<T> = {
  readonly [P in keyof T]: DeepReadonly11392<T[P]>;
};

type UnionToIntersection11392<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11392<T> = UnionToIntersection11392<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11392<T extends unknown[], V> = [...T, V];

type TuplifyUnion11392<T, L = LastOf11392<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11392<TuplifyUnion11392<Exclude<T, L>>, L>;

type DeepPartial11392<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11392<T[P]> }
  : T;

type Paths11392<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11392<K, Paths11392<T[K], Prev11392[D]>> : never }[keyof T]
  : never;

type Prev11392 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11392<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11392 {
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

type ConfigPaths11392 = Paths11392<NestedConfig11392>;

interface HeavyProps11392 {
  config: DeepPartial11392<NestedConfig11392>;
  path?: ConfigPaths11392;
}

const HeavyComponent11392 = memo(function HeavyComponent11392({ config }: HeavyProps11392) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11392) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11392 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11392: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11392.displayName = 'HeavyComponent11392';
export default HeavyComponent11392;
