'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2722<T> = T extends (infer U)[]
  ? DeepReadonlyArray2722<U>
  : T extends object
  ? DeepReadonlyObject2722<T>
  : T;

interface DeepReadonlyArray2722<T> extends ReadonlyArray<DeepReadonly2722<T>> {}

type DeepReadonlyObject2722<T> = {
  readonly [P in keyof T]: DeepReadonly2722<T[P]>;
};

type UnionToIntersection2722<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2722<T> = UnionToIntersection2722<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2722<T extends unknown[], V> = [...T, V];

type TuplifyUnion2722<T, L = LastOf2722<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2722<TuplifyUnion2722<Exclude<T, L>>, L>;

type DeepPartial2722<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2722<T[P]> }
  : T;

type Paths2722<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2722<K, Paths2722<T[K], Prev2722[D]>> : never }[keyof T]
  : never;

type Prev2722 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2722<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2722 {
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

type ConfigPaths2722 = Paths2722<NestedConfig2722>;

interface HeavyProps2722 {
  config: DeepPartial2722<NestedConfig2722>;
  path?: ConfigPaths2722;
}

const HeavyComponent2722 = memo(function HeavyComponent2722({ config }: HeavyProps2722) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2722) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2722 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2722: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2722.displayName = 'HeavyComponent2722';
export default HeavyComponent2722;
