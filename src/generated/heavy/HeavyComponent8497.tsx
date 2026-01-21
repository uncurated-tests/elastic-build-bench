'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8497<T> = T extends (infer U)[]
  ? DeepReadonlyArray8497<U>
  : T extends object
  ? DeepReadonlyObject8497<T>
  : T;

interface DeepReadonlyArray8497<T> extends ReadonlyArray<DeepReadonly8497<T>> {}

type DeepReadonlyObject8497<T> = {
  readonly [P in keyof T]: DeepReadonly8497<T[P]>;
};

type UnionToIntersection8497<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8497<T> = UnionToIntersection8497<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8497<T extends unknown[], V> = [...T, V];

type TuplifyUnion8497<T, L = LastOf8497<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8497<TuplifyUnion8497<Exclude<T, L>>, L>;

type DeepPartial8497<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8497<T[P]> }
  : T;

type Paths8497<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8497<K, Paths8497<T[K], Prev8497[D]>> : never }[keyof T]
  : never;

type Prev8497 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8497<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8497 {
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

type ConfigPaths8497 = Paths8497<NestedConfig8497>;

interface HeavyProps8497 {
  config: DeepPartial8497<NestedConfig8497>;
  path?: ConfigPaths8497;
}

const HeavyComponent8497 = memo(function HeavyComponent8497({ config }: HeavyProps8497) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8497) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8497 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8497: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8497.displayName = 'HeavyComponent8497';
export default HeavyComponent8497;
