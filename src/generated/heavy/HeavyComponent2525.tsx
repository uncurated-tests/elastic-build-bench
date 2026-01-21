'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2525<T> = T extends (infer U)[]
  ? DeepReadonlyArray2525<U>
  : T extends object
  ? DeepReadonlyObject2525<T>
  : T;

interface DeepReadonlyArray2525<T> extends ReadonlyArray<DeepReadonly2525<T>> {}

type DeepReadonlyObject2525<T> = {
  readonly [P in keyof T]: DeepReadonly2525<T[P]>;
};

type UnionToIntersection2525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2525<T> = UnionToIntersection2525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2525<T extends unknown[], V> = [...T, V];

type TuplifyUnion2525<T, L = LastOf2525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2525<TuplifyUnion2525<Exclude<T, L>>, L>;

type DeepPartial2525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2525<T[P]> }
  : T;

type Paths2525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2525<K, Paths2525<T[K], Prev2525[D]>> : never }[keyof T]
  : never;

type Prev2525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2525 {
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

type ConfigPaths2525 = Paths2525<NestedConfig2525>;

interface HeavyProps2525 {
  config: DeepPartial2525<NestedConfig2525>;
  path?: ConfigPaths2525;
}

const HeavyComponent2525 = memo(function HeavyComponent2525({ config }: HeavyProps2525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2525.displayName = 'HeavyComponent2525';
export default HeavyComponent2525;
