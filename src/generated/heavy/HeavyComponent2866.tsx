'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2866<T> = T extends (infer U)[]
  ? DeepReadonlyArray2866<U>
  : T extends object
  ? DeepReadonlyObject2866<T>
  : T;

interface DeepReadonlyArray2866<T> extends ReadonlyArray<DeepReadonly2866<T>> {}

type DeepReadonlyObject2866<T> = {
  readonly [P in keyof T]: DeepReadonly2866<T[P]>;
};

type UnionToIntersection2866<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2866<T> = UnionToIntersection2866<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2866<T extends unknown[], V> = [...T, V];

type TuplifyUnion2866<T, L = LastOf2866<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2866<TuplifyUnion2866<Exclude<T, L>>, L>;

type DeepPartial2866<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2866<T[P]> }
  : T;

type Paths2866<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2866<K, Paths2866<T[K], Prev2866[D]>> : never }[keyof T]
  : never;

type Prev2866 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2866<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2866 {
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

type ConfigPaths2866 = Paths2866<NestedConfig2866>;

interface HeavyProps2866 {
  config: DeepPartial2866<NestedConfig2866>;
  path?: ConfigPaths2866;
}

const HeavyComponent2866 = memo(function HeavyComponent2866({ config }: HeavyProps2866) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2866) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2866 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2866: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2866.displayName = 'HeavyComponent2866';
export default HeavyComponent2866;
