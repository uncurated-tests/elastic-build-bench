'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8520<T> = T extends (infer U)[]
  ? DeepReadonlyArray8520<U>
  : T extends object
  ? DeepReadonlyObject8520<T>
  : T;

interface DeepReadonlyArray8520<T> extends ReadonlyArray<DeepReadonly8520<T>> {}

type DeepReadonlyObject8520<T> = {
  readonly [P in keyof T]: DeepReadonly8520<T[P]>;
};

type UnionToIntersection8520<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8520<T> = UnionToIntersection8520<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8520<T extends unknown[], V> = [...T, V];

type TuplifyUnion8520<T, L = LastOf8520<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8520<TuplifyUnion8520<Exclude<T, L>>, L>;

type DeepPartial8520<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8520<T[P]> }
  : T;

type Paths8520<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8520<K, Paths8520<T[K], Prev8520[D]>> : never }[keyof T]
  : never;

type Prev8520 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8520<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8520 {
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

type ConfigPaths8520 = Paths8520<NestedConfig8520>;

interface HeavyProps8520 {
  config: DeepPartial8520<NestedConfig8520>;
  path?: ConfigPaths8520;
}

const HeavyComponent8520 = memo(function HeavyComponent8520({ config }: HeavyProps8520) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8520) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8520 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8520: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8520.displayName = 'HeavyComponent8520';
export default HeavyComponent8520;
