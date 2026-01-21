'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8064<T> = T extends (infer U)[]
  ? DeepReadonlyArray8064<U>
  : T extends object
  ? DeepReadonlyObject8064<T>
  : T;

interface DeepReadonlyArray8064<T> extends ReadonlyArray<DeepReadonly8064<T>> {}

type DeepReadonlyObject8064<T> = {
  readonly [P in keyof T]: DeepReadonly8064<T[P]>;
};

type UnionToIntersection8064<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8064<T> = UnionToIntersection8064<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8064<T extends unknown[], V> = [...T, V];

type TuplifyUnion8064<T, L = LastOf8064<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8064<TuplifyUnion8064<Exclude<T, L>>, L>;

type DeepPartial8064<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8064<T[P]> }
  : T;

type Paths8064<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8064<K, Paths8064<T[K], Prev8064[D]>> : never }[keyof T]
  : never;

type Prev8064 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8064<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8064 {
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

type ConfigPaths8064 = Paths8064<NestedConfig8064>;

interface HeavyProps8064 {
  config: DeepPartial8064<NestedConfig8064>;
  path?: ConfigPaths8064;
}

const HeavyComponent8064 = memo(function HeavyComponent8064({ config }: HeavyProps8064) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8064) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8064 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8064: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8064.displayName = 'HeavyComponent8064';
export default HeavyComponent8064;
