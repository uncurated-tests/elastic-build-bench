'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8314<T> = T extends (infer U)[]
  ? DeepReadonlyArray8314<U>
  : T extends object
  ? DeepReadonlyObject8314<T>
  : T;

interface DeepReadonlyArray8314<T> extends ReadonlyArray<DeepReadonly8314<T>> {}

type DeepReadonlyObject8314<T> = {
  readonly [P in keyof T]: DeepReadonly8314<T[P]>;
};

type UnionToIntersection8314<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8314<T> = UnionToIntersection8314<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8314<T extends unknown[], V> = [...T, V];

type TuplifyUnion8314<T, L = LastOf8314<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8314<TuplifyUnion8314<Exclude<T, L>>, L>;

type DeepPartial8314<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8314<T[P]> }
  : T;

type Paths8314<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8314<K, Paths8314<T[K], Prev8314[D]>> : never }[keyof T]
  : never;

type Prev8314 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8314<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8314 {
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

type ConfigPaths8314 = Paths8314<NestedConfig8314>;

interface HeavyProps8314 {
  config: DeepPartial8314<NestedConfig8314>;
  path?: ConfigPaths8314;
}

const HeavyComponent8314 = memo(function HeavyComponent8314({ config }: HeavyProps8314) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8314) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8314 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8314: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8314.displayName = 'HeavyComponent8314';
export default HeavyComponent8314;
