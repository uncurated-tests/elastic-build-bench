'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2717<T> = T extends (infer U)[]
  ? DeepReadonlyArray2717<U>
  : T extends object
  ? DeepReadonlyObject2717<T>
  : T;

interface DeepReadonlyArray2717<T> extends ReadonlyArray<DeepReadonly2717<T>> {}

type DeepReadonlyObject2717<T> = {
  readonly [P in keyof T]: DeepReadonly2717<T[P]>;
};

type UnionToIntersection2717<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2717<T> = UnionToIntersection2717<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2717<T extends unknown[], V> = [...T, V];

type TuplifyUnion2717<T, L = LastOf2717<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2717<TuplifyUnion2717<Exclude<T, L>>, L>;

type DeepPartial2717<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2717<T[P]> }
  : T;

type Paths2717<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2717<K, Paths2717<T[K], Prev2717[D]>> : never }[keyof T]
  : never;

type Prev2717 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2717<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2717 {
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

type ConfigPaths2717 = Paths2717<NestedConfig2717>;

interface HeavyProps2717 {
  config: DeepPartial2717<NestedConfig2717>;
  path?: ConfigPaths2717;
}

const HeavyComponent2717 = memo(function HeavyComponent2717({ config }: HeavyProps2717) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2717) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2717 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2717: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2717.displayName = 'HeavyComponent2717';
export default HeavyComponent2717;
