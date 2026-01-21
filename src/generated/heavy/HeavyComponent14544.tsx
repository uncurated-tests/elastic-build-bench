'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14544<T> = T extends (infer U)[]
  ? DeepReadonlyArray14544<U>
  : T extends object
  ? DeepReadonlyObject14544<T>
  : T;

interface DeepReadonlyArray14544<T> extends ReadonlyArray<DeepReadonly14544<T>> {}

type DeepReadonlyObject14544<T> = {
  readonly [P in keyof T]: DeepReadonly14544<T[P]>;
};

type UnionToIntersection14544<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14544<T> = UnionToIntersection14544<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14544<T extends unknown[], V> = [...T, V];

type TuplifyUnion14544<T, L = LastOf14544<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14544<TuplifyUnion14544<Exclude<T, L>>, L>;

type DeepPartial14544<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14544<T[P]> }
  : T;

type Paths14544<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14544<K, Paths14544<T[K], Prev14544[D]>> : never }[keyof T]
  : never;

type Prev14544 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14544<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14544 {
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

type ConfigPaths14544 = Paths14544<NestedConfig14544>;

interface HeavyProps14544 {
  config: DeepPartial14544<NestedConfig14544>;
  path?: ConfigPaths14544;
}

const HeavyComponent14544 = memo(function HeavyComponent14544({ config }: HeavyProps14544) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14544) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14544 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14544: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14544.displayName = 'HeavyComponent14544';
export default HeavyComponent14544;
