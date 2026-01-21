'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8606<T> = T extends (infer U)[]
  ? DeepReadonlyArray8606<U>
  : T extends object
  ? DeepReadonlyObject8606<T>
  : T;

interface DeepReadonlyArray8606<T> extends ReadonlyArray<DeepReadonly8606<T>> {}

type DeepReadonlyObject8606<T> = {
  readonly [P in keyof T]: DeepReadonly8606<T[P]>;
};

type UnionToIntersection8606<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8606<T> = UnionToIntersection8606<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8606<T extends unknown[], V> = [...T, V];

type TuplifyUnion8606<T, L = LastOf8606<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8606<TuplifyUnion8606<Exclude<T, L>>, L>;

type DeepPartial8606<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8606<T[P]> }
  : T;

type Paths8606<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8606<K, Paths8606<T[K], Prev8606[D]>> : never }[keyof T]
  : never;

type Prev8606 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8606<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8606 {
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

type ConfigPaths8606 = Paths8606<NestedConfig8606>;

interface HeavyProps8606 {
  config: DeepPartial8606<NestedConfig8606>;
  path?: ConfigPaths8606;
}

const HeavyComponent8606 = memo(function HeavyComponent8606({ config }: HeavyProps8606) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8606) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8606 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8606: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8606.displayName = 'HeavyComponent8606';
export default HeavyComponent8606;
