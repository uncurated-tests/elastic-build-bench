'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4628<T> = T extends (infer U)[]
  ? DeepReadonlyArray4628<U>
  : T extends object
  ? DeepReadonlyObject4628<T>
  : T;

interface DeepReadonlyArray4628<T> extends ReadonlyArray<DeepReadonly4628<T>> {}

type DeepReadonlyObject4628<T> = {
  readonly [P in keyof T]: DeepReadonly4628<T[P]>;
};

type UnionToIntersection4628<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4628<T> = UnionToIntersection4628<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4628<T extends unknown[], V> = [...T, V];

type TuplifyUnion4628<T, L = LastOf4628<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4628<TuplifyUnion4628<Exclude<T, L>>, L>;

type DeepPartial4628<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4628<T[P]> }
  : T;

type Paths4628<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4628<K, Paths4628<T[K], Prev4628[D]>> : never }[keyof T]
  : never;

type Prev4628 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4628<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4628 {
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

type ConfigPaths4628 = Paths4628<NestedConfig4628>;

interface HeavyProps4628 {
  config: DeepPartial4628<NestedConfig4628>;
  path?: ConfigPaths4628;
}

const HeavyComponent4628 = memo(function HeavyComponent4628({ config }: HeavyProps4628) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4628) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4628 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4628: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4628.displayName = 'HeavyComponent4628';
export default HeavyComponent4628;
