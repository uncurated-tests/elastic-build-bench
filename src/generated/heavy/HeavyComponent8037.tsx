'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8037<T> = T extends (infer U)[]
  ? DeepReadonlyArray8037<U>
  : T extends object
  ? DeepReadonlyObject8037<T>
  : T;

interface DeepReadonlyArray8037<T> extends ReadonlyArray<DeepReadonly8037<T>> {}

type DeepReadonlyObject8037<T> = {
  readonly [P in keyof T]: DeepReadonly8037<T[P]>;
};

type UnionToIntersection8037<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8037<T> = UnionToIntersection8037<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8037<T extends unknown[], V> = [...T, V];

type TuplifyUnion8037<T, L = LastOf8037<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8037<TuplifyUnion8037<Exclude<T, L>>, L>;

type DeepPartial8037<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8037<T[P]> }
  : T;

type Paths8037<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8037<K, Paths8037<T[K], Prev8037[D]>> : never }[keyof T]
  : never;

type Prev8037 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8037<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8037 {
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

type ConfigPaths8037 = Paths8037<NestedConfig8037>;

interface HeavyProps8037 {
  config: DeepPartial8037<NestedConfig8037>;
  path?: ConfigPaths8037;
}

const HeavyComponent8037 = memo(function HeavyComponent8037({ config }: HeavyProps8037) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8037) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8037 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8037: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8037.displayName = 'HeavyComponent8037';
export default HeavyComponent8037;
