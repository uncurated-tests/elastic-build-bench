'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8135<T> = T extends (infer U)[]
  ? DeepReadonlyArray8135<U>
  : T extends object
  ? DeepReadonlyObject8135<T>
  : T;

interface DeepReadonlyArray8135<T> extends ReadonlyArray<DeepReadonly8135<T>> {}

type DeepReadonlyObject8135<T> = {
  readonly [P in keyof T]: DeepReadonly8135<T[P]>;
};

type UnionToIntersection8135<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8135<T> = UnionToIntersection8135<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8135<T extends unknown[], V> = [...T, V];

type TuplifyUnion8135<T, L = LastOf8135<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8135<TuplifyUnion8135<Exclude<T, L>>, L>;

type DeepPartial8135<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8135<T[P]> }
  : T;

type Paths8135<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8135<K, Paths8135<T[K], Prev8135[D]>> : never }[keyof T]
  : never;

type Prev8135 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8135<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8135 {
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

type ConfigPaths8135 = Paths8135<NestedConfig8135>;

interface HeavyProps8135 {
  config: DeepPartial8135<NestedConfig8135>;
  path?: ConfigPaths8135;
}

const HeavyComponent8135 = memo(function HeavyComponent8135({ config }: HeavyProps8135) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8135) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8135 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8135: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8135.displayName = 'HeavyComponent8135';
export default HeavyComponent8135;
