'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly866<T> = T extends (infer U)[]
  ? DeepReadonlyArray866<U>
  : T extends object
  ? DeepReadonlyObject866<T>
  : T;

interface DeepReadonlyArray866<T> extends ReadonlyArray<DeepReadonly866<T>> {}

type DeepReadonlyObject866<T> = {
  readonly [P in keyof T]: DeepReadonly866<T[P]>;
};

type UnionToIntersection866<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf866<T> = UnionToIntersection866<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push866<T extends unknown[], V> = [...T, V];

type TuplifyUnion866<T, L = LastOf866<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push866<TuplifyUnion866<Exclude<T, L>>, L>;

type DeepPartial866<T> = T extends object
  ? { [P in keyof T]?: DeepPartial866<T[P]> }
  : T;

type Paths866<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join866<K, Paths866<T[K], Prev866[D]>> : never }[keyof T]
  : never;

type Prev866 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join866<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig866 {
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

type ConfigPaths866 = Paths866<NestedConfig866>;

interface HeavyProps866 {
  config: DeepPartial866<NestedConfig866>;
  path?: ConfigPaths866;
}

const HeavyComponent866 = memo(function HeavyComponent866({ config }: HeavyProps866) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 866) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-866 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H866: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent866.displayName = 'HeavyComponent866';
export default HeavyComponent866;
