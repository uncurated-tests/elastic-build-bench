'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12941<T> = T extends (infer U)[]
  ? DeepReadonlyArray12941<U>
  : T extends object
  ? DeepReadonlyObject12941<T>
  : T;

interface DeepReadonlyArray12941<T> extends ReadonlyArray<DeepReadonly12941<T>> {}

type DeepReadonlyObject12941<T> = {
  readonly [P in keyof T]: DeepReadonly12941<T[P]>;
};

type UnionToIntersection12941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12941<T> = UnionToIntersection12941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12941<T extends unknown[], V> = [...T, V];

type TuplifyUnion12941<T, L = LastOf12941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12941<TuplifyUnion12941<Exclude<T, L>>, L>;

type DeepPartial12941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12941<T[P]> }
  : T;

type Paths12941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12941<K, Paths12941<T[K], Prev12941[D]>> : never }[keyof T]
  : never;

type Prev12941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12941 {
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

type ConfigPaths12941 = Paths12941<NestedConfig12941>;

interface HeavyProps12941 {
  config: DeepPartial12941<NestedConfig12941>;
  path?: ConfigPaths12941;
}

const HeavyComponent12941 = memo(function HeavyComponent12941({ config }: HeavyProps12941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12941.displayName = 'HeavyComponent12941';
export default HeavyComponent12941;
