'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8865<T> = T extends (infer U)[]
  ? DeepReadonlyArray8865<U>
  : T extends object
  ? DeepReadonlyObject8865<T>
  : T;

interface DeepReadonlyArray8865<T> extends ReadonlyArray<DeepReadonly8865<T>> {}

type DeepReadonlyObject8865<T> = {
  readonly [P in keyof T]: DeepReadonly8865<T[P]>;
};

type UnionToIntersection8865<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8865<T> = UnionToIntersection8865<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8865<T extends unknown[], V> = [...T, V];

type TuplifyUnion8865<T, L = LastOf8865<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8865<TuplifyUnion8865<Exclude<T, L>>, L>;

type DeepPartial8865<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8865<T[P]> }
  : T;

type Paths8865<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8865<K, Paths8865<T[K], Prev8865[D]>> : never }[keyof T]
  : never;

type Prev8865 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8865<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8865 {
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

type ConfigPaths8865 = Paths8865<NestedConfig8865>;

interface HeavyProps8865 {
  config: DeepPartial8865<NestedConfig8865>;
  path?: ConfigPaths8865;
}

const HeavyComponent8865 = memo(function HeavyComponent8865({ config }: HeavyProps8865) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8865) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8865 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8865: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8865.displayName = 'HeavyComponent8865';
export default HeavyComponent8865;
