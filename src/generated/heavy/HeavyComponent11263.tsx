'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11263<T> = T extends (infer U)[]
  ? DeepReadonlyArray11263<U>
  : T extends object
  ? DeepReadonlyObject11263<T>
  : T;

interface DeepReadonlyArray11263<T> extends ReadonlyArray<DeepReadonly11263<T>> {}

type DeepReadonlyObject11263<T> = {
  readonly [P in keyof T]: DeepReadonly11263<T[P]>;
};

type UnionToIntersection11263<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11263<T> = UnionToIntersection11263<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11263<T extends unknown[], V> = [...T, V];

type TuplifyUnion11263<T, L = LastOf11263<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11263<TuplifyUnion11263<Exclude<T, L>>, L>;

type DeepPartial11263<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11263<T[P]> }
  : T;

type Paths11263<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11263<K, Paths11263<T[K], Prev11263[D]>> : never }[keyof T]
  : never;

type Prev11263 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11263<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11263 {
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

type ConfigPaths11263 = Paths11263<NestedConfig11263>;

interface HeavyProps11263 {
  config: DeepPartial11263<NestedConfig11263>;
  path?: ConfigPaths11263;
}

const HeavyComponent11263 = memo(function HeavyComponent11263({ config }: HeavyProps11263) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11263) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11263 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11263: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11263.displayName = 'HeavyComponent11263';
export default HeavyComponent11263;
