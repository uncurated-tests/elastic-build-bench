'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly136<T> = T extends (infer U)[]
  ? DeepReadonlyArray136<U>
  : T extends object
  ? DeepReadonlyObject136<T>
  : T;

interface DeepReadonlyArray136<T> extends ReadonlyArray<DeepReadonly136<T>> {}

type DeepReadonlyObject136<T> = {
  readonly [P in keyof T]: DeepReadonly136<T[P]>;
};

type UnionToIntersection136<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf136<T> = UnionToIntersection136<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push136<T extends unknown[], V> = [...T, V];

type TuplifyUnion136<T, L = LastOf136<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push136<TuplifyUnion136<Exclude<T, L>>, L>;

type DeepPartial136<T> = T extends object
  ? { [P in keyof T]?: DeepPartial136<T[P]> }
  : T;

type Paths136<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join136<K, Paths136<T[K], Prev136[D]>> : never }[keyof T]
  : never;

type Prev136 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join136<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig136 {
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

type ConfigPaths136 = Paths136<NestedConfig136>;

interface HeavyProps136 {
  config: DeepPartial136<NestedConfig136>;
  path?: ConfigPaths136;
}

const HeavyComponent136 = memo(function HeavyComponent136({ config }: HeavyProps136) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 136) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-136 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H136: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent136.displayName = 'HeavyComponent136';
export default HeavyComponent136;
