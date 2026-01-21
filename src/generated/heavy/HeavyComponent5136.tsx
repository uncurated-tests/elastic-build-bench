'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5136<T> = T extends (infer U)[]
  ? DeepReadonlyArray5136<U>
  : T extends object
  ? DeepReadonlyObject5136<T>
  : T;

interface DeepReadonlyArray5136<T> extends ReadonlyArray<DeepReadonly5136<T>> {}

type DeepReadonlyObject5136<T> = {
  readonly [P in keyof T]: DeepReadonly5136<T[P]>;
};

type UnionToIntersection5136<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5136<T> = UnionToIntersection5136<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5136<T extends unknown[], V> = [...T, V];

type TuplifyUnion5136<T, L = LastOf5136<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5136<TuplifyUnion5136<Exclude<T, L>>, L>;

type DeepPartial5136<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5136<T[P]> }
  : T;

type Paths5136<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5136<K, Paths5136<T[K], Prev5136[D]>> : never }[keyof T]
  : never;

type Prev5136 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5136<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5136 {
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

type ConfigPaths5136 = Paths5136<NestedConfig5136>;

interface HeavyProps5136 {
  config: DeepPartial5136<NestedConfig5136>;
  path?: ConfigPaths5136;
}

const HeavyComponent5136 = memo(function HeavyComponent5136({ config }: HeavyProps5136) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5136) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5136 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5136: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5136.displayName = 'HeavyComponent5136';
export default HeavyComponent5136;
