'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4557<T> = T extends (infer U)[]
  ? DeepReadonlyArray4557<U>
  : T extends object
  ? DeepReadonlyObject4557<T>
  : T;

interface DeepReadonlyArray4557<T> extends ReadonlyArray<DeepReadonly4557<T>> {}

type DeepReadonlyObject4557<T> = {
  readonly [P in keyof T]: DeepReadonly4557<T[P]>;
};

type UnionToIntersection4557<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4557<T> = UnionToIntersection4557<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4557<T extends unknown[], V> = [...T, V];

type TuplifyUnion4557<T, L = LastOf4557<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4557<TuplifyUnion4557<Exclude<T, L>>, L>;

type DeepPartial4557<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4557<T[P]> }
  : T;

type Paths4557<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4557<K, Paths4557<T[K], Prev4557[D]>> : never }[keyof T]
  : never;

type Prev4557 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4557<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4557 {
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

type ConfigPaths4557 = Paths4557<NestedConfig4557>;

interface HeavyProps4557 {
  config: DeepPartial4557<NestedConfig4557>;
  path?: ConfigPaths4557;
}

const HeavyComponent4557 = memo(function HeavyComponent4557({ config }: HeavyProps4557) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4557) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4557 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4557: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4557.displayName = 'HeavyComponent4557';
export default HeavyComponent4557;
