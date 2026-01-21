'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8124<T> = T extends (infer U)[]
  ? DeepReadonlyArray8124<U>
  : T extends object
  ? DeepReadonlyObject8124<T>
  : T;

interface DeepReadonlyArray8124<T> extends ReadonlyArray<DeepReadonly8124<T>> {}

type DeepReadonlyObject8124<T> = {
  readonly [P in keyof T]: DeepReadonly8124<T[P]>;
};

type UnionToIntersection8124<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8124<T> = UnionToIntersection8124<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8124<T extends unknown[], V> = [...T, V];

type TuplifyUnion8124<T, L = LastOf8124<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8124<TuplifyUnion8124<Exclude<T, L>>, L>;

type DeepPartial8124<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8124<T[P]> }
  : T;

type Paths8124<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8124<K, Paths8124<T[K], Prev8124[D]>> : never }[keyof T]
  : never;

type Prev8124 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8124<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8124 {
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

type ConfigPaths8124 = Paths8124<NestedConfig8124>;

interface HeavyProps8124 {
  config: DeepPartial8124<NestedConfig8124>;
  path?: ConfigPaths8124;
}

const HeavyComponent8124 = memo(function HeavyComponent8124({ config }: HeavyProps8124) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8124) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8124 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8124: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8124.displayName = 'HeavyComponent8124';
export default HeavyComponent8124;
