'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2635<T> = T extends (infer U)[]
  ? DeepReadonlyArray2635<U>
  : T extends object
  ? DeepReadonlyObject2635<T>
  : T;

interface DeepReadonlyArray2635<T> extends ReadonlyArray<DeepReadonly2635<T>> {}

type DeepReadonlyObject2635<T> = {
  readonly [P in keyof T]: DeepReadonly2635<T[P]>;
};

type UnionToIntersection2635<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2635<T> = UnionToIntersection2635<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2635<T extends unknown[], V> = [...T, V];

type TuplifyUnion2635<T, L = LastOf2635<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2635<TuplifyUnion2635<Exclude<T, L>>, L>;

type DeepPartial2635<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2635<T[P]> }
  : T;

type Paths2635<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2635<K, Paths2635<T[K], Prev2635[D]>> : never }[keyof T]
  : never;

type Prev2635 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2635<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2635 {
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

type ConfigPaths2635 = Paths2635<NestedConfig2635>;

interface HeavyProps2635 {
  config: DeepPartial2635<NestedConfig2635>;
  path?: ConfigPaths2635;
}

const HeavyComponent2635 = memo(function HeavyComponent2635({ config }: HeavyProps2635) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2635) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2635 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2635: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2635.displayName = 'HeavyComponent2635';
export default HeavyComponent2635;
