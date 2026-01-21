'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4866<T> = T extends (infer U)[]
  ? DeepReadonlyArray4866<U>
  : T extends object
  ? DeepReadonlyObject4866<T>
  : T;

interface DeepReadonlyArray4866<T> extends ReadonlyArray<DeepReadonly4866<T>> {}

type DeepReadonlyObject4866<T> = {
  readonly [P in keyof T]: DeepReadonly4866<T[P]>;
};

type UnionToIntersection4866<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4866<T> = UnionToIntersection4866<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4866<T extends unknown[], V> = [...T, V];

type TuplifyUnion4866<T, L = LastOf4866<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4866<TuplifyUnion4866<Exclude<T, L>>, L>;

type DeepPartial4866<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4866<T[P]> }
  : T;

type Paths4866<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4866<K, Paths4866<T[K], Prev4866[D]>> : never }[keyof T]
  : never;

type Prev4866 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4866<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4866 {
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

type ConfigPaths4866 = Paths4866<NestedConfig4866>;

interface HeavyProps4866 {
  config: DeepPartial4866<NestedConfig4866>;
  path?: ConfigPaths4866;
}

const HeavyComponent4866 = memo(function HeavyComponent4866({ config }: HeavyProps4866) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4866) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4866 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4866: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4866.displayName = 'HeavyComponent4866';
export default HeavyComponent4866;
