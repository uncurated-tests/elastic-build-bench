'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7136<T> = T extends (infer U)[]
  ? DeepReadonlyArray7136<U>
  : T extends object
  ? DeepReadonlyObject7136<T>
  : T;

interface DeepReadonlyArray7136<T> extends ReadonlyArray<DeepReadonly7136<T>> {}

type DeepReadonlyObject7136<T> = {
  readonly [P in keyof T]: DeepReadonly7136<T[P]>;
};

type UnionToIntersection7136<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7136<T> = UnionToIntersection7136<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7136<T extends unknown[], V> = [...T, V];

type TuplifyUnion7136<T, L = LastOf7136<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7136<TuplifyUnion7136<Exclude<T, L>>, L>;

type DeepPartial7136<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7136<T[P]> }
  : T;

type Paths7136<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7136<K, Paths7136<T[K], Prev7136[D]>> : never }[keyof T]
  : never;

type Prev7136 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7136<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7136 {
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

type ConfigPaths7136 = Paths7136<NestedConfig7136>;

interface HeavyProps7136 {
  config: DeepPartial7136<NestedConfig7136>;
  path?: ConfigPaths7136;
}

const HeavyComponent7136 = memo(function HeavyComponent7136({ config }: HeavyProps7136) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7136) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7136 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7136: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7136.displayName = 'HeavyComponent7136';
export default HeavyComponent7136;
