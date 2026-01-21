'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4136<T> = T extends (infer U)[]
  ? DeepReadonlyArray4136<U>
  : T extends object
  ? DeepReadonlyObject4136<T>
  : T;

interface DeepReadonlyArray4136<T> extends ReadonlyArray<DeepReadonly4136<T>> {}

type DeepReadonlyObject4136<T> = {
  readonly [P in keyof T]: DeepReadonly4136<T[P]>;
};

type UnionToIntersection4136<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4136<T> = UnionToIntersection4136<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4136<T extends unknown[], V> = [...T, V];

type TuplifyUnion4136<T, L = LastOf4136<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4136<TuplifyUnion4136<Exclude<T, L>>, L>;

type DeepPartial4136<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4136<T[P]> }
  : T;

type Paths4136<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4136<K, Paths4136<T[K], Prev4136[D]>> : never }[keyof T]
  : never;

type Prev4136 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4136<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4136 {
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

type ConfigPaths4136 = Paths4136<NestedConfig4136>;

interface HeavyProps4136 {
  config: DeepPartial4136<NestedConfig4136>;
  path?: ConfigPaths4136;
}

const HeavyComponent4136 = memo(function HeavyComponent4136({ config }: HeavyProps4136) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4136) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4136 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4136: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4136.displayName = 'HeavyComponent4136';
export default HeavyComponent4136;
