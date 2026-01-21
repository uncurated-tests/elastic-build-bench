'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4857<T> = T extends (infer U)[]
  ? DeepReadonlyArray4857<U>
  : T extends object
  ? DeepReadonlyObject4857<T>
  : T;

interface DeepReadonlyArray4857<T> extends ReadonlyArray<DeepReadonly4857<T>> {}

type DeepReadonlyObject4857<T> = {
  readonly [P in keyof T]: DeepReadonly4857<T[P]>;
};

type UnionToIntersection4857<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4857<T> = UnionToIntersection4857<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4857<T extends unknown[], V> = [...T, V];

type TuplifyUnion4857<T, L = LastOf4857<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4857<TuplifyUnion4857<Exclude<T, L>>, L>;

type DeepPartial4857<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4857<T[P]> }
  : T;

type Paths4857<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4857<K, Paths4857<T[K], Prev4857[D]>> : never }[keyof T]
  : never;

type Prev4857 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4857<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4857 {
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

type ConfigPaths4857 = Paths4857<NestedConfig4857>;

interface HeavyProps4857 {
  config: DeepPartial4857<NestedConfig4857>;
  path?: ConfigPaths4857;
}

const HeavyComponent4857 = memo(function HeavyComponent4857({ config }: HeavyProps4857) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4857) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4857 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4857: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4857.displayName = 'HeavyComponent4857';
export default HeavyComponent4857;
