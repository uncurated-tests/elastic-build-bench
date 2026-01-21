'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly506<T> = T extends (infer U)[]
  ? DeepReadonlyArray506<U>
  : T extends object
  ? DeepReadonlyObject506<T>
  : T;

interface DeepReadonlyArray506<T> extends ReadonlyArray<DeepReadonly506<T>> {}

type DeepReadonlyObject506<T> = {
  readonly [P in keyof T]: DeepReadonly506<T[P]>;
};

type UnionToIntersection506<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf506<T> = UnionToIntersection506<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push506<T extends unknown[], V> = [...T, V];

type TuplifyUnion506<T, L = LastOf506<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push506<TuplifyUnion506<Exclude<T, L>>, L>;

type DeepPartial506<T> = T extends object
  ? { [P in keyof T]?: DeepPartial506<T[P]> }
  : T;

type Paths506<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join506<K, Paths506<T[K], Prev506[D]>> : never }[keyof T]
  : never;

type Prev506 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join506<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig506 {
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

type ConfigPaths506 = Paths506<NestedConfig506>;

interface HeavyProps506 {
  config: DeepPartial506<NestedConfig506>;
  path?: ConfigPaths506;
}

const HeavyComponent506 = memo(function HeavyComponent506({ config }: HeavyProps506) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 506) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-506 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H506: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent506.displayName = 'HeavyComponent506';
export default HeavyComponent506;
