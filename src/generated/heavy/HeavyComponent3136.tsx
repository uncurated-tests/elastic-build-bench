'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3136<T> = T extends (infer U)[]
  ? DeepReadonlyArray3136<U>
  : T extends object
  ? DeepReadonlyObject3136<T>
  : T;

interface DeepReadonlyArray3136<T> extends ReadonlyArray<DeepReadonly3136<T>> {}

type DeepReadonlyObject3136<T> = {
  readonly [P in keyof T]: DeepReadonly3136<T[P]>;
};

type UnionToIntersection3136<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3136<T> = UnionToIntersection3136<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3136<T extends unknown[], V> = [...T, V];

type TuplifyUnion3136<T, L = LastOf3136<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3136<TuplifyUnion3136<Exclude<T, L>>, L>;

type DeepPartial3136<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3136<T[P]> }
  : T;

type Paths3136<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3136<K, Paths3136<T[K], Prev3136[D]>> : never }[keyof T]
  : never;

type Prev3136 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3136<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3136 {
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

type ConfigPaths3136 = Paths3136<NestedConfig3136>;

interface HeavyProps3136 {
  config: DeepPartial3136<NestedConfig3136>;
  path?: ConfigPaths3136;
}

const HeavyComponent3136 = memo(function HeavyComponent3136({ config }: HeavyProps3136) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3136) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3136 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3136: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3136.displayName = 'HeavyComponent3136';
export default HeavyComponent3136;
