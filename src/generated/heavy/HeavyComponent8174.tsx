'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8174<T> = T extends (infer U)[]
  ? DeepReadonlyArray8174<U>
  : T extends object
  ? DeepReadonlyObject8174<T>
  : T;

interface DeepReadonlyArray8174<T> extends ReadonlyArray<DeepReadonly8174<T>> {}

type DeepReadonlyObject8174<T> = {
  readonly [P in keyof T]: DeepReadonly8174<T[P]>;
};

type UnionToIntersection8174<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8174<T> = UnionToIntersection8174<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8174<T extends unknown[], V> = [...T, V];

type TuplifyUnion8174<T, L = LastOf8174<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8174<TuplifyUnion8174<Exclude<T, L>>, L>;

type DeepPartial8174<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8174<T[P]> }
  : T;

type Paths8174<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8174<K, Paths8174<T[K], Prev8174[D]>> : never }[keyof T]
  : never;

type Prev8174 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8174<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8174 {
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

type ConfigPaths8174 = Paths8174<NestedConfig8174>;

interface HeavyProps8174 {
  config: DeepPartial8174<NestedConfig8174>;
  path?: ConfigPaths8174;
}

const HeavyComponent8174 = memo(function HeavyComponent8174({ config }: HeavyProps8174) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8174) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8174 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8174: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8174.displayName = 'HeavyComponent8174';
export default HeavyComponent8174;
