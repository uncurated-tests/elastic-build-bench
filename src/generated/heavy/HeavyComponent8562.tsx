'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8562<T> = T extends (infer U)[]
  ? DeepReadonlyArray8562<U>
  : T extends object
  ? DeepReadonlyObject8562<T>
  : T;

interface DeepReadonlyArray8562<T> extends ReadonlyArray<DeepReadonly8562<T>> {}

type DeepReadonlyObject8562<T> = {
  readonly [P in keyof T]: DeepReadonly8562<T[P]>;
};

type UnionToIntersection8562<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8562<T> = UnionToIntersection8562<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8562<T extends unknown[], V> = [...T, V];

type TuplifyUnion8562<T, L = LastOf8562<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8562<TuplifyUnion8562<Exclude<T, L>>, L>;

type DeepPartial8562<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8562<T[P]> }
  : T;

type Paths8562<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8562<K, Paths8562<T[K], Prev8562[D]>> : never }[keyof T]
  : never;

type Prev8562 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8562<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8562 {
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

type ConfigPaths8562 = Paths8562<NestedConfig8562>;

interface HeavyProps8562 {
  config: DeepPartial8562<NestedConfig8562>;
  path?: ConfigPaths8562;
}

const HeavyComponent8562 = memo(function HeavyComponent8562({ config }: HeavyProps8562) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8562) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8562 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8562: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8562.displayName = 'HeavyComponent8562';
export default HeavyComponent8562;
