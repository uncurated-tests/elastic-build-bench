'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11724<T> = T extends (infer U)[]
  ? DeepReadonlyArray11724<U>
  : T extends object
  ? DeepReadonlyObject11724<T>
  : T;

interface DeepReadonlyArray11724<T> extends ReadonlyArray<DeepReadonly11724<T>> {}

type DeepReadonlyObject11724<T> = {
  readonly [P in keyof T]: DeepReadonly11724<T[P]>;
};

type UnionToIntersection11724<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11724<T> = UnionToIntersection11724<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11724<T extends unknown[], V> = [...T, V];

type TuplifyUnion11724<T, L = LastOf11724<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11724<TuplifyUnion11724<Exclude<T, L>>, L>;

type DeepPartial11724<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11724<T[P]> }
  : T;

type Paths11724<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11724<K, Paths11724<T[K], Prev11724[D]>> : never }[keyof T]
  : never;

type Prev11724 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11724<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11724 {
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

type ConfigPaths11724 = Paths11724<NestedConfig11724>;

interface HeavyProps11724 {
  config: DeepPartial11724<NestedConfig11724>;
  path?: ConfigPaths11724;
}

const HeavyComponent11724 = memo(function HeavyComponent11724({ config }: HeavyProps11724) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11724) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11724 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11724: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11724.displayName = 'HeavyComponent11724';
export default HeavyComponent11724;
