'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8867<T> = T extends (infer U)[]
  ? DeepReadonlyArray8867<U>
  : T extends object
  ? DeepReadonlyObject8867<T>
  : T;

interface DeepReadonlyArray8867<T> extends ReadonlyArray<DeepReadonly8867<T>> {}

type DeepReadonlyObject8867<T> = {
  readonly [P in keyof T]: DeepReadonly8867<T[P]>;
};

type UnionToIntersection8867<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8867<T> = UnionToIntersection8867<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8867<T extends unknown[], V> = [...T, V];

type TuplifyUnion8867<T, L = LastOf8867<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8867<TuplifyUnion8867<Exclude<T, L>>, L>;

type DeepPartial8867<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8867<T[P]> }
  : T;

type Paths8867<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8867<K, Paths8867<T[K], Prev8867[D]>> : never }[keyof T]
  : never;

type Prev8867 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8867<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8867 {
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

type ConfigPaths8867 = Paths8867<NestedConfig8867>;

interface HeavyProps8867 {
  config: DeepPartial8867<NestedConfig8867>;
  path?: ConfigPaths8867;
}

const HeavyComponent8867 = memo(function HeavyComponent8867({ config }: HeavyProps8867) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8867) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8867 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8867: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8867.displayName = 'HeavyComponent8867';
export default HeavyComponent8867;
