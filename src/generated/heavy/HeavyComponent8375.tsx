'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8375<T> = T extends (infer U)[]
  ? DeepReadonlyArray8375<U>
  : T extends object
  ? DeepReadonlyObject8375<T>
  : T;

interface DeepReadonlyArray8375<T> extends ReadonlyArray<DeepReadonly8375<T>> {}

type DeepReadonlyObject8375<T> = {
  readonly [P in keyof T]: DeepReadonly8375<T[P]>;
};

type UnionToIntersection8375<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8375<T> = UnionToIntersection8375<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8375<T extends unknown[], V> = [...T, V];

type TuplifyUnion8375<T, L = LastOf8375<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8375<TuplifyUnion8375<Exclude<T, L>>, L>;

type DeepPartial8375<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8375<T[P]> }
  : T;

type Paths8375<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8375<K, Paths8375<T[K], Prev8375[D]>> : never }[keyof T]
  : never;

type Prev8375 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8375<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8375 {
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

type ConfigPaths8375 = Paths8375<NestedConfig8375>;

interface HeavyProps8375 {
  config: DeepPartial8375<NestedConfig8375>;
  path?: ConfigPaths8375;
}

const HeavyComponent8375 = memo(function HeavyComponent8375({ config }: HeavyProps8375) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8375) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8375 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8375: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8375.displayName = 'HeavyComponent8375';
export default HeavyComponent8375;
