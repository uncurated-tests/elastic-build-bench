'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8263<T> = T extends (infer U)[]
  ? DeepReadonlyArray8263<U>
  : T extends object
  ? DeepReadonlyObject8263<T>
  : T;

interface DeepReadonlyArray8263<T> extends ReadonlyArray<DeepReadonly8263<T>> {}

type DeepReadonlyObject8263<T> = {
  readonly [P in keyof T]: DeepReadonly8263<T[P]>;
};

type UnionToIntersection8263<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8263<T> = UnionToIntersection8263<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8263<T extends unknown[], V> = [...T, V];

type TuplifyUnion8263<T, L = LastOf8263<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8263<TuplifyUnion8263<Exclude<T, L>>, L>;

type DeepPartial8263<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8263<T[P]> }
  : T;

type Paths8263<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8263<K, Paths8263<T[K], Prev8263[D]>> : never }[keyof T]
  : never;

type Prev8263 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8263<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8263 {
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

type ConfigPaths8263 = Paths8263<NestedConfig8263>;

interface HeavyProps8263 {
  config: DeepPartial8263<NestedConfig8263>;
  path?: ConfigPaths8263;
}

const HeavyComponent8263 = memo(function HeavyComponent8263({ config }: HeavyProps8263) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8263) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8263 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8263: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8263.displayName = 'HeavyComponent8263';
export default HeavyComponent8263;
