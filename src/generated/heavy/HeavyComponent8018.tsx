'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8018<T> = T extends (infer U)[]
  ? DeepReadonlyArray8018<U>
  : T extends object
  ? DeepReadonlyObject8018<T>
  : T;

interface DeepReadonlyArray8018<T> extends ReadonlyArray<DeepReadonly8018<T>> {}

type DeepReadonlyObject8018<T> = {
  readonly [P in keyof T]: DeepReadonly8018<T[P]>;
};

type UnionToIntersection8018<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8018<T> = UnionToIntersection8018<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8018<T extends unknown[], V> = [...T, V];

type TuplifyUnion8018<T, L = LastOf8018<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8018<TuplifyUnion8018<Exclude<T, L>>, L>;

type DeepPartial8018<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8018<T[P]> }
  : T;

type Paths8018<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8018<K, Paths8018<T[K], Prev8018[D]>> : never }[keyof T]
  : never;

type Prev8018 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8018<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8018 {
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

type ConfigPaths8018 = Paths8018<NestedConfig8018>;

interface HeavyProps8018 {
  config: DeepPartial8018<NestedConfig8018>;
  path?: ConfigPaths8018;
}

const HeavyComponent8018 = memo(function HeavyComponent8018({ config }: HeavyProps8018) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8018) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8018 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8018: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8018.displayName = 'HeavyComponent8018';
export default HeavyComponent8018;
