'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8726<T> = T extends (infer U)[]
  ? DeepReadonlyArray8726<U>
  : T extends object
  ? DeepReadonlyObject8726<T>
  : T;

interface DeepReadonlyArray8726<T> extends ReadonlyArray<DeepReadonly8726<T>> {}

type DeepReadonlyObject8726<T> = {
  readonly [P in keyof T]: DeepReadonly8726<T[P]>;
};

type UnionToIntersection8726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8726<T> = UnionToIntersection8726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8726<T extends unknown[], V> = [...T, V];

type TuplifyUnion8726<T, L = LastOf8726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8726<TuplifyUnion8726<Exclude<T, L>>, L>;

type DeepPartial8726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8726<T[P]> }
  : T;

type Paths8726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8726<K, Paths8726<T[K], Prev8726[D]>> : never }[keyof T]
  : never;

type Prev8726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8726 {
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

type ConfigPaths8726 = Paths8726<NestedConfig8726>;

interface HeavyProps8726 {
  config: DeepPartial8726<NestedConfig8726>;
  path?: ConfigPaths8726;
}

const HeavyComponent8726 = memo(function HeavyComponent8726({ config }: HeavyProps8726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8726.displayName = 'HeavyComponent8726';
export default HeavyComponent8726;
