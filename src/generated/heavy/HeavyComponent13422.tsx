'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13422<T> = T extends (infer U)[]
  ? DeepReadonlyArray13422<U>
  : T extends object
  ? DeepReadonlyObject13422<T>
  : T;

interface DeepReadonlyArray13422<T> extends ReadonlyArray<DeepReadonly13422<T>> {}

type DeepReadonlyObject13422<T> = {
  readonly [P in keyof T]: DeepReadonly13422<T[P]>;
};

type UnionToIntersection13422<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13422<T> = UnionToIntersection13422<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13422<T extends unknown[], V> = [...T, V];

type TuplifyUnion13422<T, L = LastOf13422<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13422<TuplifyUnion13422<Exclude<T, L>>, L>;

type DeepPartial13422<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13422<T[P]> }
  : T;

type Paths13422<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13422<K, Paths13422<T[K], Prev13422[D]>> : never }[keyof T]
  : never;

type Prev13422 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13422<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13422 {
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

type ConfigPaths13422 = Paths13422<NestedConfig13422>;

interface HeavyProps13422 {
  config: DeepPartial13422<NestedConfig13422>;
  path?: ConfigPaths13422;
}

const HeavyComponent13422 = memo(function HeavyComponent13422({ config }: HeavyProps13422) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13422) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13422 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13422: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13422.displayName = 'HeavyComponent13422';
export default HeavyComponent13422;
