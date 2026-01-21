'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6866<T> = T extends (infer U)[]
  ? DeepReadonlyArray6866<U>
  : T extends object
  ? DeepReadonlyObject6866<T>
  : T;

interface DeepReadonlyArray6866<T> extends ReadonlyArray<DeepReadonly6866<T>> {}

type DeepReadonlyObject6866<T> = {
  readonly [P in keyof T]: DeepReadonly6866<T[P]>;
};

type UnionToIntersection6866<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6866<T> = UnionToIntersection6866<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6866<T extends unknown[], V> = [...T, V];

type TuplifyUnion6866<T, L = LastOf6866<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6866<TuplifyUnion6866<Exclude<T, L>>, L>;

type DeepPartial6866<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6866<T[P]> }
  : T;

type Paths6866<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6866<K, Paths6866<T[K], Prev6866[D]>> : never }[keyof T]
  : never;

type Prev6866 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6866<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6866 {
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

type ConfigPaths6866 = Paths6866<NestedConfig6866>;

interface HeavyProps6866 {
  config: DeepPartial6866<NestedConfig6866>;
  path?: ConfigPaths6866;
}

const HeavyComponent6866 = memo(function HeavyComponent6866({ config }: HeavyProps6866) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6866) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6866 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6866: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6866.displayName = 'HeavyComponent6866';
export default HeavyComponent6866;
