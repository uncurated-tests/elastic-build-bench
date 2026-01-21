'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2794<T> = T extends (infer U)[]
  ? DeepReadonlyArray2794<U>
  : T extends object
  ? DeepReadonlyObject2794<T>
  : T;

interface DeepReadonlyArray2794<T> extends ReadonlyArray<DeepReadonly2794<T>> {}

type DeepReadonlyObject2794<T> = {
  readonly [P in keyof T]: DeepReadonly2794<T[P]>;
};

type UnionToIntersection2794<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2794<T> = UnionToIntersection2794<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2794<T extends unknown[], V> = [...T, V];

type TuplifyUnion2794<T, L = LastOf2794<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2794<TuplifyUnion2794<Exclude<T, L>>, L>;

type DeepPartial2794<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2794<T[P]> }
  : T;

type Paths2794<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2794<K, Paths2794<T[K], Prev2794[D]>> : never }[keyof T]
  : never;

type Prev2794 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2794<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2794 {
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

type ConfigPaths2794 = Paths2794<NestedConfig2794>;

interface HeavyProps2794 {
  config: DeepPartial2794<NestedConfig2794>;
  path?: ConfigPaths2794;
}

const HeavyComponent2794 = memo(function HeavyComponent2794({ config }: HeavyProps2794) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2794) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2794 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2794: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2794.displayName = 'HeavyComponent2794';
export default HeavyComponent2794;
