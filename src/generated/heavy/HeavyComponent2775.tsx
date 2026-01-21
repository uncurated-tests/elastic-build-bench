'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2775<T> = T extends (infer U)[]
  ? DeepReadonlyArray2775<U>
  : T extends object
  ? DeepReadonlyObject2775<T>
  : T;

interface DeepReadonlyArray2775<T> extends ReadonlyArray<DeepReadonly2775<T>> {}

type DeepReadonlyObject2775<T> = {
  readonly [P in keyof T]: DeepReadonly2775<T[P]>;
};

type UnionToIntersection2775<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2775<T> = UnionToIntersection2775<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2775<T extends unknown[], V> = [...T, V];

type TuplifyUnion2775<T, L = LastOf2775<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2775<TuplifyUnion2775<Exclude<T, L>>, L>;

type DeepPartial2775<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2775<T[P]> }
  : T;

type Paths2775<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2775<K, Paths2775<T[K], Prev2775[D]>> : never }[keyof T]
  : never;

type Prev2775 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2775<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2775 {
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

type ConfigPaths2775 = Paths2775<NestedConfig2775>;

interface HeavyProps2775 {
  config: DeepPartial2775<NestedConfig2775>;
  path?: ConfigPaths2775;
}

const HeavyComponent2775 = memo(function HeavyComponent2775({ config }: HeavyProps2775) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2775) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2775 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2775: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2775.displayName = 'HeavyComponent2775';
export default HeavyComponent2775;
