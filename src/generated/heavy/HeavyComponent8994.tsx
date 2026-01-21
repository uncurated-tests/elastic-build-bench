'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8994<T> = T extends (infer U)[]
  ? DeepReadonlyArray8994<U>
  : T extends object
  ? DeepReadonlyObject8994<T>
  : T;

interface DeepReadonlyArray8994<T> extends ReadonlyArray<DeepReadonly8994<T>> {}

type DeepReadonlyObject8994<T> = {
  readonly [P in keyof T]: DeepReadonly8994<T[P]>;
};

type UnionToIntersection8994<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8994<T> = UnionToIntersection8994<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8994<T extends unknown[], V> = [...T, V];

type TuplifyUnion8994<T, L = LastOf8994<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8994<TuplifyUnion8994<Exclude<T, L>>, L>;

type DeepPartial8994<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8994<T[P]> }
  : T;

type Paths8994<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8994<K, Paths8994<T[K], Prev8994[D]>> : never }[keyof T]
  : never;

type Prev8994 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8994<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8994 {
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

type ConfigPaths8994 = Paths8994<NestedConfig8994>;

interface HeavyProps8994 {
  config: DeepPartial8994<NestedConfig8994>;
  path?: ConfigPaths8994;
}

const HeavyComponent8994 = memo(function HeavyComponent8994({ config }: HeavyProps8994) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8994) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8994 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8994: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8994.displayName = 'HeavyComponent8994';
export default HeavyComponent8994;
