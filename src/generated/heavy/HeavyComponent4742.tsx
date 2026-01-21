'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4742<T> = T extends (infer U)[]
  ? DeepReadonlyArray4742<U>
  : T extends object
  ? DeepReadonlyObject4742<T>
  : T;

interface DeepReadonlyArray4742<T> extends ReadonlyArray<DeepReadonly4742<T>> {}

type DeepReadonlyObject4742<T> = {
  readonly [P in keyof T]: DeepReadonly4742<T[P]>;
};

type UnionToIntersection4742<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4742<T> = UnionToIntersection4742<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4742<T extends unknown[], V> = [...T, V];

type TuplifyUnion4742<T, L = LastOf4742<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4742<TuplifyUnion4742<Exclude<T, L>>, L>;

type DeepPartial4742<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4742<T[P]> }
  : T;

type Paths4742<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4742<K, Paths4742<T[K], Prev4742[D]>> : never }[keyof T]
  : never;

type Prev4742 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4742<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4742 {
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

type ConfigPaths4742 = Paths4742<NestedConfig4742>;

interface HeavyProps4742 {
  config: DeepPartial4742<NestedConfig4742>;
  path?: ConfigPaths4742;
}

const HeavyComponent4742 = memo(function HeavyComponent4742({ config }: HeavyProps4742) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4742) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4742 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4742: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4742.displayName = 'HeavyComponent4742';
export default HeavyComponent4742;
