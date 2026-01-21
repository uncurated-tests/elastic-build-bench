'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4117<T> = T extends (infer U)[]
  ? DeepReadonlyArray4117<U>
  : T extends object
  ? DeepReadonlyObject4117<T>
  : T;

interface DeepReadonlyArray4117<T> extends ReadonlyArray<DeepReadonly4117<T>> {}

type DeepReadonlyObject4117<T> = {
  readonly [P in keyof T]: DeepReadonly4117<T[P]>;
};

type UnionToIntersection4117<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4117<T> = UnionToIntersection4117<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4117<T extends unknown[], V> = [...T, V];

type TuplifyUnion4117<T, L = LastOf4117<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4117<TuplifyUnion4117<Exclude<T, L>>, L>;

type DeepPartial4117<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4117<T[P]> }
  : T;

type Paths4117<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4117<K, Paths4117<T[K], Prev4117[D]>> : never }[keyof T]
  : never;

type Prev4117 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4117<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4117 {
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

type ConfigPaths4117 = Paths4117<NestedConfig4117>;

interface HeavyProps4117 {
  config: DeepPartial4117<NestedConfig4117>;
  path?: ConfigPaths4117;
}

const HeavyComponent4117 = memo(function HeavyComponent4117({ config }: HeavyProps4117) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4117) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4117 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4117: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4117.displayName = 'HeavyComponent4117';
export default HeavyComponent4117;
