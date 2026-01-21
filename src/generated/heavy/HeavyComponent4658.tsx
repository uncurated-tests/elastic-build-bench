'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4658<T> = T extends (infer U)[]
  ? DeepReadonlyArray4658<U>
  : T extends object
  ? DeepReadonlyObject4658<T>
  : T;

interface DeepReadonlyArray4658<T> extends ReadonlyArray<DeepReadonly4658<T>> {}

type DeepReadonlyObject4658<T> = {
  readonly [P in keyof T]: DeepReadonly4658<T[P]>;
};

type UnionToIntersection4658<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4658<T> = UnionToIntersection4658<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4658<T extends unknown[], V> = [...T, V];

type TuplifyUnion4658<T, L = LastOf4658<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4658<TuplifyUnion4658<Exclude<T, L>>, L>;

type DeepPartial4658<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4658<T[P]> }
  : T;

type Paths4658<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4658<K, Paths4658<T[K], Prev4658[D]>> : never }[keyof T]
  : never;

type Prev4658 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4658<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4658 {
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

type ConfigPaths4658 = Paths4658<NestedConfig4658>;

interface HeavyProps4658 {
  config: DeepPartial4658<NestedConfig4658>;
  path?: ConfigPaths4658;
}

const HeavyComponent4658 = memo(function HeavyComponent4658({ config }: HeavyProps4658) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4658) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4658 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4658: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4658.displayName = 'HeavyComponent4658';
export default HeavyComponent4658;
