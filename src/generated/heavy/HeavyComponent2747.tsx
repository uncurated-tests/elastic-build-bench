'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2747<T> = T extends (infer U)[]
  ? DeepReadonlyArray2747<U>
  : T extends object
  ? DeepReadonlyObject2747<T>
  : T;

interface DeepReadonlyArray2747<T> extends ReadonlyArray<DeepReadonly2747<T>> {}

type DeepReadonlyObject2747<T> = {
  readonly [P in keyof T]: DeepReadonly2747<T[P]>;
};

type UnionToIntersection2747<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2747<T> = UnionToIntersection2747<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2747<T extends unknown[], V> = [...T, V];

type TuplifyUnion2747<T, L = LastOf2747<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2747<TuplifyUnion2747<Exclude<T, L>>, L>;

type DeepPartial2747<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2747<T[P]> }
  : T;

type Paths2747<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2747<K, Paths2747<T[K], Prev2747[D]>> : never }[keyof T]
  : never;

type Prev2747 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2747<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2747 {
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

type ConfigPaths2747 = Paths2747<NestedConfig2747>;

interface HeavyProps2747 {
  config: DeepPartial2747<NestedConfig2747>;
  path?: ConfigPaths2747;
}

const HeavyComponent2747 = memo(function HeavyComponent2747({ config }: HeavyProps2747) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2747) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2747 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2747: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2747.displayName = 'HeavyComponent2747';
export default HeavyComponent2747;
