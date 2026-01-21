'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8866<T> = T extends (infer U)[]
  ? DeepReadonlyArray8866<U>
  : T extends object
  ? DeepReadonlyObject8866<T>
  : T;

interface DeepReadonlyArray8866<T> extends ReadonlyArray<DeepReadonly8866<T>> {}

type DeepReadonlyObject8866<T> = {
  readonly [P in keyof T]: DeepReadonly8866<T[P]>;
};

type UnionToIntersection8866<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8866<T> = UnionToIntersection8866<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8866<T extends unknown[], V> = [...T, V];

type TuplifyUnion8866<T, L = LastOf8866<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8866<TuplifyUnion8866<Exclude<T, L>>, L>;

type DeepPartial8866<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8866<T[P]> }
  : T;

type Paths8866<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8866<K, Paths8866<T[K], Prev8866[D]>> : never }[keyof T]
  : never;

type Prev8866 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8866<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8866 {
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

type ConfigPaths8866 = Paths8866<NestedConfig8866>;

interface HeavyProps8866 {
  config: DeepPartial8866<NestedConfig8866>;
  path?: ConfigPaths8866;
}

const HeavyComponent8866 = memo(function HeavyComponent8866({ config }: HeavyProps8866) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8866) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8866 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8866: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8866.displayName = 'HeavyComponent8866';
export default HeavyComponent8866;
