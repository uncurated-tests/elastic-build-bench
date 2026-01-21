'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8136<T> = T extends (infer U)[]
  ? DeepReadonlyArray8136<U>
  : T extends object
  ? DeepReadonlyObject8136<T>
  : T;

interface DeepReadonlyArray8136<T> extends ReadonlyArray<DeepReadonly8136<T>> {}

type DeepReadonlyObject8136<T> = {
  readonly [P in keyof T]: DeepReadonly8136<T[P]>;
};

type UnionToIntersection8136<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8136<T> = UnionToIntersection8136<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8136<T extends unknown[], V> = [...T, V];

type TuplifyUnion8136<T, L = LastOf8136<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8136<TuplifyUnion8136<Exclude<T, L>>, L>;

type DeepPartial8136<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8136<T[P]> }
  : T;

type Paths8136<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8136<K, Paths8136<T[K], Prev8136[D]>> : never }[keyof T]
  : never;

type Prev8136 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8136<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8136 {
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

type ConfigPaths8136 = Paths8136<NestedConfig8136>;

interface HeavyProps8136 {
  config: DeepPartial8136<NestedConfig8136>;
  path?: ConfigPaths8136;
}

const HeavyComponent8136 = memo(function HeavyComponent8136({ config }: HeavyProps8136) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8136) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8136 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8136: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8136.displayName = 'HeavyComponent8136';
export default HeavyComponent8136;
