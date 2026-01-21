'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8070<T> = T extends (infer U)[]
  ? DeepReadonlyArray8070<U>
  : T extends object
  ? DeepReadonlyObject8070<T>
  : T;

interface DeepReadonlyArray8070<T> extends ReadonlyArray<DeepReadonly8070<T>> {}

type DeepReadonlyObject8070<T> = {
  readonly [P in keyof T]: DeepReadonly8070<T[P]>;
};

type UnionToIntersection8070<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8070<T> = UnionToIntersection8070<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8070<T extends unknown[], V> = [...T, V];

type TuplifyUnion8070<T, L = LastOf8070<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8070<TuplifyUnion8070<Exclude<T, L>>, L>;

type DeepPartial8070<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8070<T[P]> }
  : T;

type Paths8070<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8070<K, Paths8070<T[K], Prev8070[D]>> : never }[keyof T]
  : never;

type Prev8070 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8070<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8070 {
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

type ConfigPaths8070 = Paths8070<NestedConfig8070>;

interface HeavyProps8070 {
  config: DeepPartial8070<NestedConfig8070>;
  path?: ConfigPaths8070;
}

const HeavyComponent8070 = memo(function HeavyComponent8070({ config }: HeavyProps8070) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8070) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8070 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8070: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8070.displayName = 'HeavyComponent8070';
export default HeavyComponent8070;
