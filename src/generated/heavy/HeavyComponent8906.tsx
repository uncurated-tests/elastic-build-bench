'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8906<T> = T extends (infer U)[]
  ? DeepReadonlyArray8906<U>
  : T extends object
  ? DeepReadonlyObject8906<T>
  : T;

interface DeepReadonlyArray8906<T> extends ReadonlyArray<DeepReadonly8906<T>> {}

type DeepReadonlyObject8906<T> = {
  readonly [P in keyof T]: DeepReadonly8906<T[P]>;
};

type UnionToIntersection8906<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8906<T> = UnionToIntersection8906<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8906<T extends unknown[], V> = [...T, V];

type TuplifyUnion8906<T, L = LastOf8906<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8906<TuplifyUnion8906<Exclude<T, L>>, L>;

type DeepPartial8906<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8906<T[P]> }
  : T;

type Paths8906<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8906<K, Paths8906<T[K], Prev8906[D]>> : never }[keyof T]
  : never;

type Prev8906 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8906<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8906 {
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

type ConfigPaths8906 = Paths8906<NestedConfig8906>;

interface HeavyProps8906 {
  config: DeepPartial8906<NestedConfig8906>;
  path?: ConfigPaths8906;
}

const HeavyComponent8906 = memo(function HeavyComponent8906({ config }: HeavyProps8906) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8906) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8906 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8906: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8906.displayName = 'HeavyComponent8906';
export default HeavyComponent8906;
