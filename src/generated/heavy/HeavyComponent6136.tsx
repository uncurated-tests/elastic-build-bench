'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6136<T> = T extends (infer U)[]
  ? DeepReadonlyArray6136<U>
  : T extends object
  ? DeepReadonlyObject6136<T>
  : T;

interface DeepReadonlyArray6136<T> extends ReadonlyArray<DeepReadonly6136<T>> {}

type DeepReadonlyObject6136<T> = {
  readonly [P in keyof T]: DeepReadonly6136<T[P]>;
};

type UnionToIntersection6136<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6136<T> = UnionToIntersection6136<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6136<T extends unknown[], V> = [...T, V];

type TuplifyUnion6136<T, L = LastOf6136<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6136<TuplifyUnion6136<Exclude<T, L>>, L>;

type DeepPartial6136<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6136<T[P]> }
  : T;

type Paths6136<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6136<K, Paths6136<T[K], Prev6136[D]>> : never }[keyof T]
  : never;

type Prev6136 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6136<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6136 {
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

type ConfigPaths6136 = Paths6136<NestedConfig6136>;

interface HeavyProps6136 {
  config: DeepPartial6136<NestedConfig6136>;
  path?: ConfigPaths6136;
}

const HeavyComponent6136 = memo(function HeavyComponent6136({ config }: HeavyProps6136) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6136) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6136 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6136: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6136.displayName = 'HeavyComponent6136';
export default HeavyComponent6136;
